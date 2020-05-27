<template>
  <div>
    <div class="mb-4" v-for="field in fields" :key="field.name">
      <!-- radio field -->
      <b-form-group v-if="field.type === 'radio'" class="mt-3" label-size="lg"
          :label="field.label" :description="field.hint">
        <b-form-radio v-for="choice in field.options" :key="choice[0]" inline
            :required="field.required" :name="field.name" :size="field.size || 'md'"
            v-model="form[field.name]" :value="choice[0]">
          {{ choice[1] }}
        </b-form-radio>
      </b-form-group>
      <!-- textarea field -->
      <b-form-group v-if="field.type === 'textarea'" label-size="lg"
        :label="field.label" :description="field.hint"
      >
        <b-form-textarea
          v-model="form[field.name]"
          placeholder=""
          rows="3"
        ></b-form-textarea>
      </b-form-group>
      <!-- link field -->
      <b-form-group v-if="field.type === 'link'" label-size="lg"
        :label="field.label" :description="field.hint"
      >
        <a :href="field.link" target="_blank">{{ field.link }}</a>
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
      type: Array
    },
    form: {
      required: true,
      type: Object
    }
  }
}
</script>
