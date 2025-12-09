require('datejs');

function combineUsers(...args) {
    // Initialize the return object
    const combinedObject = {
        users: []
    };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};