<template>
  <div>
    <ul>
      <li>
        <router-link :to="firstChildRoute">
          first child
        </router-link>
      </li>
      <li>
        <router-link :to="secondChildRoute">
          second child
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      storeFoods: 'foods',
    }),
    firstChildRoute() {
      const name = 'firstChild'
      const { $route: { params, query } } = this
      return { name, params, query }
    },
    secondChildRoute() {
      debugger
      const name = 'secondChild'
      const { $route: { params, query }, storeFoods: foods } = this
      return { name, params, query: { ...query, foods } }
    },
  },
}
</script>
