require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };
    
    // Loop through each array and merge using spread
    for (let i = 0; i < args.length; i++) {
        combinedObject.users = [...combinedObject.users, ...args[i]];
    }
    
    // Add today's date in M/d/yyyy format
    combinedObject.merge_date = new Date().toString('M/d/yyyy');
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};