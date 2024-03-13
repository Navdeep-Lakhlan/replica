document.addEventListener('DOMContentLoaded', function () {
    const organizerRadioButton = document.getElementById('isOrganizerParticipating-accept');
    const organizerOnlyRadioButton = document.getElementById('isOrganizerParticipating-decline');
    const addMoreNamesButton = document.querySelector('.blP23');
    const namesContainer = document.querySelector('.GfN08');

    organizerRadioButton.addEventListener('change', function () {
        
        console.log("Organizer and Participating selected");
    });

    organizerOnlyRadioButton.addEventListener('change', function () {

        console.log("Organizer Only selected");
    });

    addMoreNamesButton.addEventListener('click', function () {
        addNameInput();
    });

    function addNameInput() {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'mscE7 wvBeV';
        newInput.placeholder = 'Enter Name';

        namesContainer.appendChild(newInput);
    }
});