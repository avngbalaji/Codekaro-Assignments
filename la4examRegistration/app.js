console.log('connected');

let users=[];

let alertDiv = document.getElementById('alert');
let centerDisplay = document.getElementById('centerDisplay')
let userContainer = document.getElementById('users');

function register(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;

    console.log(name);
    console.log(age);
    console.log(email);

    let examCenters=['Chennai', 'Mumbai', 'Kolkata', 'Hyderabad', 'Lucknow'];
    let lengthOf = Math.floor(Math.random()*examCenters.length);
    let randomCenter = examCenters[lengthOf];
    console.log(randomCenter);

    let countEmail = users.filter((user)=>{
        return user.email == email;
    })

    let tempUser={
        name: name,
        age: age,
        email: email,
        randomCenter: randomCenter,
    }

    if(countEmail.length == 0 && age>=18 && age<=24 && email!=""){
        users.push(tempUser);

        alertDiv.innerHTML = 'Registration Successful!'+' '+`Your Exam Center is ${randomCenter}`;
        alertDiv.classList.remove('d-none');
        alertDiv.classList.add('alert');
        alertDiv.classList.add('success');

        setTimeout(()=>{
            alertDiv.classList.remove('success');
            alertDiv.classList.remove('alert');
            alertDiv.classList.add('d-none');
        }, 3000);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
    }

    else if(name=="" || age=="" || email==""){

        alertDiv.innerHTML = 'Provide all the essential details!';
        alertDiv.classList.remove('d-none');
        alertDiv.classList.add('alert');
        alertDiv.classList.add('danger');

        setTimeout(()=>{
            alertDiv.classList.remove('danger');
            alertDiv.classList.remove('alert');
            alertDiv.classList.add('d-none');
        }, 3000);
    }
    else if(age<18 || age>24){

        alertDiv.innerHTML = 'You are Not eligible for this exam!';
        alertDiv.classList.remove('d-none');
        alertDiv.classList.add('alert');
        alertDiv.classList.add('danger');

        setTimeout(()=>{
            alertDiv.classList.remove('danger');
            alertDiv.classList.remove('alert');
            alertDiv.classList.add('d-none');
        }, 3000);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
    }
    else{

        alertDiv.innerHTML = 'This email ID is already registered. ' +' '+'Try some other email.';
        alertDiv.classList.remove('d-none');
        alertDiv.classList.add('alert');
        alertDiv.classList.add('danger');

        setTimeout(()=>{
            alertDiv.classList.remove('danger');
            alertDiv.classList.remove('alert');
            alertDiv.classList.add('d-none');
        }, 3000);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
    }

    console.log(users);


    userContainer.innerHTML = '';
    users.map((user)=>{
        let userDiv = document.createElement('div');
        let nameContainer = document.createElement('p');
        let emailContainer = document.createElement('p');
        let stateContainer = document.createElement('p');

        userDiv.classList.add('user');
        nameContainer.classList.add('name');
        emailContainer.classList.add('email');
        stateContainer.classList.add('state');

        nameContainer.innerText = user.name;
        emailContainer.innerText = user.email;
        stateContainer.innerText = user.randomCenter;

        userContainer.appendChild(userDiv);
        userDiv.appendChild(nameContainer);
        userDiv.appendChild(emailContainer);
        userDiv.appendChild(stateContainer);
    })
}