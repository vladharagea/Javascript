    //Creating Objects

    // let myCar = {
    //     //key : value
    //     make : 'Ford',
    //     model : 'Mustang',
    //     year : 1969
    // };

    // console.log(myCar);
    // console.log(`The property make : ${myCar.make}`);
    // console.log(`The property model : ${myCar.model}`);
    // console.log(`The property year : ${myCar.year}`);

    //Assigning values to properties

    let myCar = {};
    myCar.make = 'Ford';
    myCar.model = 'Mustang';
    myCar.year = 1969;


    console.log(myCar);
    console.log(`The property make : ${myCar.make}`);
    console.log(`The property model : ${myCar.model}`);
    console.log(`The property year : ${myCar.year}`);

    //Array info

    var info = ['John', 'Schulz', 32, 'Berlin'];
    console.log(info[0]);

    console.log('=======================================');

    var objInfo = {
        firstName: 'John',
        lastName: 'Schulz',
        age: 32,
        city: 'Berlin'
    };

    console.log(objInfo.firstName);

    console.log('=============================================')
    var family = {
        children: [{
            age: 3,
            name: 'Paul'
        }, {
            age: 4,
            name: 'Susi'
        }],
        father: 'Peter',
        mother: 'Sandra'
    };

    console.log(family);
    console.log(family.children);
    console.log(family.children[1]);
    console.log(family.children[1].name);

    console.log('================================================')

    var appletree = {

        apples: [{
                color: 'red',
                taste: 'very',
                num: 12,
                size: [
                    'big',
                    'small',
                    'medium'
                ]
            },
            {
                color: 'yellow',
                taste: 'very',
                num: 11
            }
        ],
        tree: 'wonderful'
    };
    //get value of 'medium' size property;
    console.log(appletree);
    console.log(appletree.apples);
    console.log(appletree.apples[0]);
    console.log(appletree.apples[0].size[2]);

    console.log('==========================================')
    // get value of the num property 
    console.log(appletree);
    console.log(appletree.apples);
    console.log(appletree.apples[1]);
    console.log(appletree.apples[1].num);

    //user object

    let user = {
        name: 'John',
        age: 30
    };

    user.idAdmin = true;
    console.log(user);

    delete user.age;
    console.log(user);

    let user2 = {
        name: 'John',
        age: 30,
        'like birds': true
    };
    console.log(user2);
    // console.log(user2.likes birds); Error, property can not be with space
    // console.log(user2); Error, property can not assign as string
    console.log(user2['like birds']); //with brackets you can get value for the multiword! not used!

    let user3 = {};
    user3['like birds'] = true;
    //get
    console.log(user3);

    delete user3['like birds'];
    console.log(user3);

    // We can use square brackets i na object literal. That's called Computed properties.

    let fruit = 'kiwi';
    let fruitBucket = {
        [fruit]: 5
    };
    console.log(fruitBucket); // { kiwi : 5}
    console.log(fruitBucket.kiwi);
    console.log(fruitBucket['kiwi test']); // if let fruit = 'kiwi test'

    console.log('==============================')

    let obj = {
        for: 1,
        let: 2,
        return: 3
    };

    console.log(obj.for+obj.let+obj.return);

    let obj1 = {
        for: 'return',
        let: 2,
        return: 3
    };

    console.log(obj1.for+obj1.let+obj1.return);

    let obj2 = {
        for: 1,
        let: 'return',
        return: 3
    };

    console.log(obj2.for+obj2.let+obj2.return);

    console.log('===================================');

    //Comparing objects

    console.clear();

    console.log('Comparing Objects');

    let obj4 = {
        name: {
            firstName: 'John',
            lastName: 'Schulz'
        },
        age: 32
    };

    let obj5 = {
        name: {
            firstName: 'John',
            lastName: 'Schulz'
        },
        age: 32
    };

    console.log(obj4 == obj5); //false
    console.log(obj4.name == obj5.name); //false
    console.log(obj4.name.firstName == obj5.name.firstName); //true

    //Looping through Objects

    // The best way to loop thorugh objects is first to convert the object into an array. The you loop through the array.

    // you can convert an object into an array with three methods

    //1. Object.keys
    //2. Object.values
    //3. Object.entries

    //1. Object.keys : creates an array that contains the properties of an object.

    const fruits = {
        apple: 28,
        orange: 17,
        pear: 54,
    };

    const keys = Object.keys(fruits);
    console.log(keys);
    // case 1 : old way
    console.log('--Case 1 --')

    for (i = 0; i < keys.length; i++) {
        console.log(keys[i]);
    };

    //case 2 (const/var/let key of array)
    //also called For .. Of .. Loop

    console.log('--Case 2 --')
    for (const smotoc of keys) {
        console.log(smotoc); // smotoc is again whatever name you want.
    };

    //case 3 : array/forEach(function(currentValue, index, arr), thisValue)
    console.log('--Case 3--');
    console.log(keys);
    keys.forEach(displayKeys);

    function displayKeys(items, index, keys) {
        console.log(`The key of ${items} has index of ${index}`);
    }
    console.log('==========================');
    keys.forEach((items, index, keys) => {
        console.log(`The key of ${items} has index of ${index}`);
    });

    console.log('========================')
    //2. Object.values creates an array that contains the values of every property in an object

    const values = Object.values(fruits);
    console.log(values);

    console.log('=======================')

    //Object.entries creates an array within an array(an array of arrays). Each inner array has two items. The first item is the property and the second item is the value.

    const entries = Object.entries(fruits);
    console.log(entries);

    entries.forEach((item, index) => {
        console.log(`The array [${item}] has an index of ${index}`)
    });
    console.log('==================');
    for (const item of entries) {
        console.log(item[0]);
        console.log(item[1]);
    };
    console.log('==================');

    for (const [fruits, count] of entries){
        console.log(`There are ${fruits} ${count}`);
    };
    