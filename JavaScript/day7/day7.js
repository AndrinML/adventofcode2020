const fs = require('fs');

const bagRules = fs.readFileSync('day7Input.txt', {encoding: 'utf-8'}).split('.\n').filter(x => x);



function hasGoldBag (bagColor) {
const bagRule = bagRules.find((bagRule) => bagRule.startsWith(bagColor));

if(bagRule.endsWith('no other bags')){
    return false;
}

const [, childBags] = bagRule.split(' bags contain ');

const childBagColors = childBags.split(', ').map((childBagSpec) => childBagSpec.match(/^\d (\w.*?) bag|bags$/)[1]);

if(childBagColors.includes('shiny gold')){
    return true;
}

return childBagColors.some(hasGoldBag);

};
const bagsHoldShiny = bagRules.filter((bagRule) => {
    const [bagColor] = bagRule.split(' bags contain ');
    return hasGoldBag(bagColor);
  });

  console.log('part 1 ' + bagsHoldShiny.length);