<template>
  <div>
    <div v-for="(field, fieldName) in fields" :key="fieldName">
      <!-- radio field -->
      <b-form-group v-if="field.type === 'radio'" class="mt-3" label-size="lg"
          :label="field.label" :description="field.hint">
        <b-form-radio v-for="choice in field.options" :key="choice[0]" inline
            :required="field.required" :name="fieldName" :size="field.size || 'md'"
            v-model="form[fieldName]" :value="choice[0]">
          {{ choice[1] }}
        </b-form-radio>
      </b-form-group>
      <!-- textarea field -->
      <b-form-group v-if="field.type === 'textarea'" label-size="lg"
        :label="field.label" :description="field.hint"
      >
        <b-form-textarea
          v-model="form[fieldName]"
          placeholder=""
          rows="3"
        ></b-form-textarea>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSection',
  props: {
    fields: {
      required: true,
      type: Object
    },
    form: {
      required: true,
      type: Object
    }
  }
}
</script>
