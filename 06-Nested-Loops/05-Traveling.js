function nestedLoops(input) {
 
    let index = 0;
    let command = input[index];
    index++;
 
    while (command !== 'End') {
        let destination = command;
        let budget = Number(input[index]);
        index++;
 
        let saveMoney = 0;
 
        while (saveMoney < budget) {
            let money = Number(input[index]);
            index++;
            saveMoney += money;
        }
 
        console.log(`Going to ${destination}!`);
 
        command = input[index];
        index++;
    }
}