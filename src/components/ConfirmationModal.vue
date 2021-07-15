<template>

</template>

<script>

export default {
  components: {
    
  },
  props: {
    open: Boolean,
  },
  emits:{
	  'registration-cancelled': null,
	  'registration-confirmed': null
  },
  methods: {
	  cancelRegistration(){
		  this.$emit('registration-cancelled')
	  },
	  confirmRegistration(){
		  this.$emit('registration-confirmed')
	  }
  }
}
</script>