while (true) {
    let start = window.prompt('Welcome to the Kingdom of Norwood. If you want to be a shop owner type "shop". If you want to be a knight type "knight".').toLowerCase()

    if(start == "knight") {
        let knight = window.prompt('Do you want to guard the queen(type "queen"). Or do to war(type "war")').toLowerCase()
        if(knight == "queen") {
            alert("You are protecting the queen as she goes on a walk. As you walk through woods you ran into a group on bandits")
            let woods = window.prompt('Do you fight alone(type "alone) or do you try and talk with the bandits(type "talk)').toLowerCase()  
            if(woods == "alone") {
                alert("You killed the knights, almost dying in the process. The queens life was saved and a new love story was form. But thats for a different time. The end...")
            }

            else if(woods == "talk") {
                alert("You and the queen pleaded with the bandits to not kill you. But they didnt listen and you and the queen are now dead")
            }

            else {
                let woods = window.prompt('Do you fight alone(type "alone) or do you try and talk with the bandits(type "talk)').toLowerCase() 
            }
        }
    }   

    else if(start == "shop") {
        let shop = window.prompt('Do you want to sell the God Sword(type "sell"). Or do you want to keep it(type "keep")').toLowerCase()
    }

    else {
        let start = window.prompt('Welcome to the Kingdom of Norwood. If you want to be a shop owner type "shop". If you want to be a knight type "knight".').toLowerCase()
    }   
}

