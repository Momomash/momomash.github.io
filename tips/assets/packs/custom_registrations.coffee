import '../stylesheets/_smartwizard.scss'
window.jQuery = $
require('smartwizard')
require('jquery-validation')
getCompanyInfo = (inn_ogrn) ->
  inn_ogrn = new Number(inn_ogrn)
  company_info_container = $('#company_info')
  if !isNaN(inn_ogrn) && inn_ogrn>0
    url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party"
    $.ajax(
      type: "POST"
      url: url
      data: JSON.stringify({"query": inn_ogrn, "branch_type": "MAIN"})
      contentType: "application/json"
      headers:{
        Accept: "application/json"
        Authorization: "Token 64137fae228ddb4a5e2ab02b21099871a8746c1d"
      }
    ).done((data) ->
      if(data.suggestions.length>0)
        company_data = data.suggestions[0].data
        company = {title: {value: company_data.name.short_with_opf, label: 'Название'}}
        company.legal_address = {value: company_data.address.unrestricted_value, label: 'Юридический адрес'}
        company.inn = {value: company_data.inn, label: 'ИНН'}
        company.ogrn = {value: company_data.ogrn, label: 'ОГРН'}
        company.kpp = {value: company_data.kpp, label: 'КПП'}
        company.ceo = {value: company_data.management.name, label: 'Генеральный директор'}
        company_info_container.html('')
        $.each company, (key, field) ->
          company_info_container.append("<input type='hidden' name='custom_registration[#{key}]' id='custom_registration_#{key}' value='#{field.value}'>")
          company_info_container.append("<div class='text-muted mdc-my-2'><strong>#{field.label}</strong>: #{field.value}</div>")
      else
        company_info_container.html('')
        company_info_container.append("<div class='text-danger mdc-my-2'>Не найдена компания с такими данными</div><input type='checkbox' class='hidden' required='required' aria-required='true'>")
    ).fail(()->
      company_info_container.append("<div class='text-danger mdc-my-2'>Что-то пошло не так. Попробуйте повторить позже.</div><input type='checkbox' class='hidden' required='required' aria-required='true'>")
    )
  else
    company_info_container.append("<div class='text-danger mdc-my-2'>Неверные данные</div><input type='checkbox' class='hidden' required='required' aria-required='true'>")
$(document).on 'change', '#custom_registration_inn_ogrn', ()->
  window.company_info_updated = false
$(document).on 'click', '.sw-btn-next', ()->
  if !window.company_info_updated && $('#custom_registration_inn_ogrn').val()!=""
    getCompanyInfo($('#custom_registration_inn_ogrn').val())
    window.company_info_updated = true
document.addEventListener 'turbolinks:load', ()->
  $ = window.jQuery
  $form = $('.smart_wizard_form')
  $btnFinish = $('<button class="btn-finish mdc-button mdc-button--raised hidden mdc-ml-2" type="button">Сохранить</button>')
  # Set up validator
  $form.validate
    errorPlacement: (error, element) ->
      $(element).parents('.form-group').append error.addClass('invalid-feedback small d-block')
      return
    highlight: (element) ->
      $(element).parent().addClass 'mdc-text-field--invalid'
      return
    unhighlight: (element) ->
      $(element).parent().removeClass 'mdc-text-field--invalid'
      return
    rules: 'wizard-confirm': equalTo: 'input[name="wizard-password"]'
  # Initialize wizard
  $form.smartWizard(
    autoAdjustHeight: false
    backButtonSupport: false
    useURLhash: false
    anchorSettings:
      removeDoneStepOnNavigateBack: true
    lang:
      next: 'Далее'
      previous: 'Назад'
    showStepURLhash: false
    toolbarSettings: toolbarExtraButtons: [ $btnFinish ]).on('leaveStep', (e, anchorObject, stepNumber, stepDirection) ->
# stepDirection === 'forward' :- this condition allows to do the form validation
# only on forward navigation, that makes easy navigation on backwards still do the validation when going next
    if stepDirection == 'forward'
      return $form.valid()
    true
  ).on 'showStep', (e, anchorObject, stepNumber, stepDirection) ->
    $btn = $form.find('.btn-finish')
    # Enable finish button only on last step
    if stepNumber == $('.step-anchor li').length-1
      $btn.removeClass 'hidden'
    else
      $btn.addClass 'hidden'
    return
  # Click on finish button
  $form.find('.btn-finish').on 'click', ->
    if !$form.valid()
      return
    # Submit form
    $form.submit()
    false