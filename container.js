/**@description this file holds all the dependencies tha we are going to use multiple times in our project
 * @author Aditya Rawal
 * @copyright adrawal @2018
 */
const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

/** I have maintaned a dependencies array,
 *  this array will holds all the dependencies in form ofkey value pair.
 *   */
const simpleDependencies =[
    ['lodash','lodash'],
    ['mongoose','mongoose']
];

/** To iterate through array of dependencies and returning 
 * registering each dependenies into container.
 */
simpleDependencies.forEach(function(val){
    container.register(val[0],function(){
        return require(val[1]);

    });
});

/** To available this dependencies at folder level,
 *  we are loading those folder into containers */
container.load(path.join(__dirname,'/app/controllers'));
container.load(path.join(__dirname,'/app/services'));

/** Registering the container */
container.register('container',function(){
    return container;
})

module.exports = container;