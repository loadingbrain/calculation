document.getElementById('calculate').addEventListener('click', () => {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date(document.getElementById('currentDate').value);
    
    const ageInMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageInMilliseconds);
  
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
  
    const calculatedAgeElement = document.getElementById('calculatedAge');
    calculatedAgeElement.textContent = years;
  
    const calculatedMonthsElement = document.getElementById('calculatedMonths');
    calculatedMonthsElement.textContent = months;
  
    const calculatedDaysElement = document.getElementById('calculatedDays');
    calculatedDaysElement.textContent = days;
  
    const resultElement = document.getElementById('result');
    resultElement.classList.add('visible');
  });
  