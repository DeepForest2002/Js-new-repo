
const new_object={
    'book':'Green Book',
    'Publisher':'Sayan Pramanik',
    function_obj: function (){
        console.log(`The name of the book is ${this.book} and the publisher is ${this.Publisher}`)
    }
}
new_object.function_obj()