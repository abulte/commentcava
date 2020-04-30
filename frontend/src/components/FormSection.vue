<template>
  <div>
    <div v-for="field in fields" :key="field.name">
      <!-- radio field -->
      <b-form-group v-if="field.data.type === 'radio'" class="mt-3" label-size="lg"
          :label="field.data.label" :description="field.data.hint">
        <b-form-radio v-for="choice in field.data.options" :key="choice[0]" inline
            :required="field.data.required" :name="field.data.name" :size="field.data.size || 'md'"
            v-model="form[field.name]" :value="choice[0]">
          {{ choice[1] }}
        </b-form-radio>
      </b-form-group>
      <!-- textarea field -->
      <b-form-group v-if="field.data.type === 'textarea'" label-size="lg"
        :label="field.data.label" :description="field.data.hint"
      >
        <b-form-textarea
          v-model="form[field.name]"
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
