let jobLists = document.getElementById('app');

//Get access to the json data and display it
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    // Create new li with the joblisting and assign a class to it
    const jobListingItems = data.map((item) => {
      let jobListing = document.createElement('div');
      jobListing.className = 'job--listings--group';

      // Personal information (i.e the details at the left hand side)
      let personalDetails = document.createElement('div');
      personalDetails.className = 'personal--details--container';
      let leftSideContent = document.createElement('div');
      leftSideContent.className = 'left--side--content';

      //Logo div
      let logoContainer = document.createElement('div');
      logoContainer.className = 'logo--container';
      let logo = document.createElement('img');
      logo.className = 'logo';
      logo.src = item.logo;
      logoContainer.append(logo);

      //Header details in the personal information
      let headerDiv = document.createElement('div');
      headerDiv.className = 'header--info';
      let company = document.createElement('p');
      company.className = 'company';
      company.textContent = item.company;
      let status = document.createElement('p');
      if (item.new === true) {
        status.className = 'new';
        status.textContent = 'new!';
      }
      let featured = document.createElement('p');
      if (item.featured === true) {
        featured.className = 'featured';
        featured.textContent = 'featured';
      }
      //Append all the three dom elements into one div tag
      headerDiv.append(company, status, featured);

      //job position
      let position = document.createElement('p');
      position.className = 'position';
      position.textContent = item.position;

      //contract description(i.e the bottom text)
      let contractDesc = document.createElement('div');
      contractDesc.className = 'contract--desc';
      let postedAt = document.createElement('p');
      postedAt.className = 'posted--at';
      postedAt.textContent = item.postedAt;
      let firstDot = document.createElement('p');
      firstDot.className = 'dot';
      firstDot.textContent = ' . ';
      let contract = document.createElement('p');
      contract.className = 'contract';
      contract.textContent = item.contract;
      let secondDot = document.createElement('p');
      secondDot.className = 'dot';
      secondDot.textContent = ' . ';
      let location = document.createElement('p');
      location.className = 'location';
      location.textContent = item.location;
      contractDesc.append(postedAt, firstDot, contract, secondDot, location);
      //Append all the items in the headerDiv, position and contractDesc dom elements
      personalDetails.append(headerDiv, position, contractDesc);

      //Skills details (i.e the details at the far right hand side)
      let skills = document.createElement('div');
      skills.className = 'skills--container';

      let role = document.createElement('p');
      role.className = 'role';
      role.textContent = item.role;
      let level = document.createElement('p');
      level.className = 'level';
      level.textContent = item.level;

      //TODO Will have to map through all the languages and display them
      skills.append(role, level);
      leftSideContent.append(logoContainer, personalDetails);

      jobListing.append(leftSideContent, skills);

      jobLists.appendChild(jobListing);
    });
  })
  .catch((error) => console.log(error));
console.log(jobLists);
