import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const NinjaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.ninja?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.ninja?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="age"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Age
        </Label>
        <NumberField
          name="age"
          defaultValue={props.ninja?.age}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="age" className="rw-field-error" />

        <Label
          name="aka"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Aka
        </Label>
        <TextField
          name="aka"
          defaultValue={props.ninja?.aka}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="aka" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NinjaForm
