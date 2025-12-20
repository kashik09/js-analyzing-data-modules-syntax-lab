require('datejs');

function combineUsers(...args) {
    // Merge all arrays into a single users array
    const users = args.flat();
    
    // Return object with users array and today's date
    return {
        users: users,
        merge_date: Date.today().toString('M/d/yyyy')
    };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};