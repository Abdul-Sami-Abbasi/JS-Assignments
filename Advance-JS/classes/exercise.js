// ###########-Exercise-##########

    class Hero{
        constructor(name, level){
            this.name = name;
            this.level = level;
            this.greet = () => {
                return `Assalam-o-Alikum ${this.name}`
            }
        }
    }

    const Hero1 = new Hero("Sami", "Beginer");
    
    class Mega extends Hero{
        constructor(name, level, spell){
            super(name, level);
            this.spell = spell;
        }
    }
    
    const Mega1 = new Mega("Wahab", "Beginer", "inseption");
    console.log(Hero1.greet());
    console.log(Mega1.greet());

// ------------------------------------------------------------------