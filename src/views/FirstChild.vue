<template>
  <div>
    first child
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: {
    foods: { type: Array, required: true },
  },
  watch: {
    foods(newFoods) {
      this.updateFoods(newFoods)
    },
  },
  created() {
    debugger
    this.updateFoods(this.foods)
  },
  methods: {
    ...mapActions({
      storeUpdateFoods: 'foods',
    }),
    updateFoods(newFoods) {
      debugger
      this.storeUpdateFoods(newFoods)
    },
  },
}
</script>
