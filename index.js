require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };
    
    // Loop through each array in args
    for (let i = 0; i < args.length; i++) {
        // We'll merge in the next level!
    }
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};