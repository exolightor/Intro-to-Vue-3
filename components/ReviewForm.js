app.component('review-form', {
    template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <fieldset>
    <legend>Would you recommend this product?</legend>
    <label><input type="radio" name="radio" value="true" v-model="recommended"/>Yes</label>
    <label><input type="radio" name="radio" value="false" v-model="recommended"/>No</label>
  </fieldset>
    

    <input type=submit value="Submit"> 
    `,
    
    data(){
        return {
            name: '',
            review: '',
            rating: null,
            recommended: false
        }
    },
    methods : {
        onSubmit(){
            if(this.name == '' || this.review == '' || this.rating == null || this.recommended === false){
                alert('Review is incomplete. Please fill out every field.')
                return
            }

            this.$emit('submit-review', {name: this.name, review: this.review,
                 rating: this.rating, recommended: this.recommended});
            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
})