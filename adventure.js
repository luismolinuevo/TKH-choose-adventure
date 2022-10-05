// while(true) {
    let start = window.prompt('Welcome to the Kingdom of Norwood. If you want to be a shop owner type "shop". If you want to be a knight type "knight".').toLowerCase()

    //chose to be a knight
    if(start == "knight") {
        let knight = window.prompt('Do you want to guard the queen(type "queen"). Or do to war(type "war")').toLowerCase()
        if(knight === "queen") {
            alert("You are protecting the queen as she goes on a walk. As you walk through woods you ran into a group on bandits")
            let woods = window.prompt('Do you fight alone(type "alone) or do you try and talk with the bandits(type "talk)').toLowerCase()  
            if(woods === "alone") {
                alert("You killed the knights, almost dying in the process. The queens life was saved and a new love story was form. But thats for a different time. The end...")
                // break;
            }

            else if(woods === "talk") {
                alert("You and the queen pleaded with the bandits to not kill you. But they didnt listen and you and the queen are now dead")
                // break;
            }

            else {
                let woods = window.prompt('Do you fight alone(type "alone) or do you try and talk with the bandits(type "talk)').toLowerCase() 
            }
        }

        else if(knight === "war") {
            alert("Over the years at war you became of general.")
            let war = window.prompt("A enemy lord wants you to join their side. Do you join or not.(type: yes or no)").toLowerCase()
            if(war === "yes") {
                alert("You joined the enemy lords side. You gave him information about the kingdom. But he killed you after because he hates traitors")
                // break
            }

            else if(war == "no") {
                alert("You fought a battle and won. Years later you became king")
                // break
            }

            else {
                let war = window.prompt("A enemy lord wants you to join their side. Do you join or not.(type: yes or no)").toLowerCase()
            }
        }
    }   

    //Chose to be a shop owner
    else if(start == "shop") {
        let shop = window.prompt('Do you want to sell the God Sword(type "sell"). Or do you want to trade it(type "trade")').toLowerCase()
        //selling sword
        if(shop === "sell") {
            alert("You are still unsure")
            let sell = window.prompt('The man is offering 1 million sprit stones do you take it(type "take") or ask for more(type "more")').toLowerCase()
            if(sell === "take") {
                alert("You later found out that the item the man wanted to trade was sold for 1 billion sprit stones")
                // break
            }
            else if(sell === "more") {
                alert("The man killed you and took the sword")
                // break
            }

            else {
                let sell = window.prompt('The man is offering 1 million sprit stones do you take it(type "take") or ask for more(type "more")').toLowerCase()
            }
        }

        //trading sword
        else if(shop == "trade") {
            alert("The man has a old book to trade")
            let trade = window.prompt('Do you trade(type "trade") or do you keep your sword and tell the man no(type "keep")').toLowerCase()
        

            if(trade === "trade")  {
                alert("This was the best trade or your life. You are rich.")
                // break
            }     
            
            else if(trade === "keep") {
                alert("The man killed you and took the sword")
                // break
            }

        else {
            let trade = window.prompt('Do you trade(type "trade") or do you keep your sword and tell the man no(type "keep")').toLowerCase()
        }

        }
    }

    else {
        let start = window.prompt('Welcome to the Kingdom of Norwood. If you want to be a shop owner type "shop". If you want to be a knight type "knight".').toLowerCase()
    }   
// }

