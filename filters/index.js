const filter = [{name: 'organisation', operator: 'eq', type: 'select', value: ''},
{name: 'end_of_life', operator: 'eq', type: 'select', value: ''},
{name: 'waist', operator: 'eq', type: 'select', value: ''},
{name: 'key_4', operator: 'eq', type: 'select', value: 'In favor'},
{name: 'key_5', operator: 'eq', type: 'select', value: 'No opinion'},
{name: 'key_6', operator: 'eq', type: 'select', value: 'No opinion'}]

const data = [{
                end_of_life: "Against",
                id: 0,
                key_4: "Against",
                key_5: "In favor",
                key_6: "No opinion",
                organisation: "Euramet ev 1",
                waist: "In favor"
              }, 
              {
                end_of_life: "Against",
                id: 0,
                key_4: "In favor",
                key_5: "No opinion",
                key_6: "No opinion",
                organisation: "Euramet ev 2",
                waist: "In favor"
            },
            {
                end_of_life: "Against",
                id: 0,
                key_4: "In favor",
                key_5: "No opinion",
                key_6: "In favor",
                organisation: "Euramet ev 3",
                waist: "In favor"
            }]


const filtered = data.filter((el) => {
  let filterCount = 0;
  filter.forEach(el => { 
    if (el.value) filterCount++
  })

  for (let i = 0; i < filter.length; i++) {
    const val1 = el[filter[i].name];
    const val2 = filter[i].value;
    if (val1 === val2) {
      filterCount--;
    };
  }
  if (filterCount === 0) return true;
  return false;
})

console.log(filtered)






