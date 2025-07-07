export default {
  template: '<div>{{ count }}</div>',
  setup() {
    let count = ref(1)
    const increment = () => count.value++
    return { count, increment } //暴露给模板
  },
}
