fruits = []
price = []
name_smoothie = []
class Smoothie{
constructor(ingredients){
        this.ingredients = ingredients
        console.log("["+ingredients+"]")
    }
    getCalculate(){
        fruits = ["Strawberries", "Banana", "Mango", "Blueberries", "Raspberries", "Apple", "Pinaple"]
        price = [1.50,0.50,2.50,1,1,1.75,3.50]
        let cost_fruits = 0
        let pos = 0
         for(let j=0; j<this.ingredients.length; j++){
            pos = fruits.indexOf(this.ingredients[j])
            cost_fruits += price[pos]
        }
        return cost_fruits
    }
    getCost(){
        let result = 0
        result = this.getCalculate() //w python byłoby sefl.getCalculate()
        result =  result.toFixed(2)
        console.log(result+"$")
        
    }

    getPrice(){
        let result2 = 0
        let new_result2 = 0
        result2 = this.getCalculate() //w python byłoby sefl.getCalculate()
        result2 =  result2.toFixed(2)
        result2 = Number(result2)
        new_result2 = Number(1.5*result2)
        new_result2 =  new_result2+result2
        console.log(new_result2+"$")
    }
    
    getName(){
        for( let i = 0; i<this.ingredients.length; i++){
            name_smoothie.push(this.ingredients[i])
        }
        console.log( name_smoothie.toString() +" Smoothie")
    }
    

}

s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"])
s2.ingredients
s2.getCost()
s2.getPrice()
s2.getName()