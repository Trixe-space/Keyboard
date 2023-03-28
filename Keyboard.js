const TypingKeys = document.querySelectorAll('.typing');
const Backspace = document.querySelector('.backspace');
const Caps = document.querySelector('.caps');
const Shift = document.querySelectorAll('.shift');
const UnfunctionalKeys = document.querySelectorAll('.unfunctional');
const Output = document.querySelector('#output');

let CapsToggle = false;
let ShiftToggle = false;

const CapsLight = document.querySelector('.lights:first-child');
const ShiftLight = document.querySelector('.lights:last-child');


const AvailableTypingKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '    ', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\n', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⍼', ' '];
const CapsTypingKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '    ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\n', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⍼', ' '];
const ShiftTypingKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '    ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '\n', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '⍼', ' '];
const CapsAndShiftTypingKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '    ', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '\n', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '⍼', ' '];

for (let Key = 0; Key < 51; Key++) {
    TypingKeys[Key].addEventListener('click', () => {
        if (CapsToggle == true && ShiftToggle == true) {
            Output.innerText += CapsAndShiftTypingKeys[Key];
        } else if (CapsToggle == true) {
            Output.innerText += CapsTypingKeys[Key];
        } else if (ShiftToggle == true) {
            Output.innerText += ShiftTypingKeys[Key];
        } else {
            Output.innerText += AvailableTypingKeys[Key];
        }
    });
}

let KeyChanger = () => {
    for (let KeyIndex = 0; KeyIndex < 51; KeyIndex++) {
        if (KeyIndex != 13 && KeyIndex != 38 && KeyIndex != 50) {
            if (CapsToggle == true && ShiftToggle == true) {
                TypingKeys[KeyIndex].innerText = CapsAndShiftTypingKeys[KeyIndex];
                CapsLight.style.backgroundColor = `green`;
                ShiftLight.style.backgroundColor = `green`;
            } else if (CapsToggle == true) {
                TypingKeys[KeyIndex].innerText = CapsTypingKeys[KeyIndex];
                CapsLight.style.backgroundColor = `green`;
                ShiftLight.style.backgroundColor = `gray`;
            } else if (ShiftToggle == true) {
                TypingKeys[KeyIndex].innerText = ShiftTypingKeys[KeyIndex];
                CapsLight.style.backgroundColor = `gray`;
                ShiftLight.style.backgroundColor = `green`;
            } else {
                TypingKeys[KeyIndex].innerText = AvailableTypingKeys[KeyIndex];
                CapsLight.style.backgroundColor = `gray`;
                ShiftLight.style.backgroundColor = `gray`;
            }
        }
    }
};

Backspace.addEventListener('click', () => {
    Output.innerText = Output.innerText.slice(0, -1);

});

Caps.addEventListener('click', () => {
    CapsToggle = !CapsToggle;
    KeyChanger();
});

for (let ShiftKey = 0; ShiftKey < 2; ShiftKey++) {
    Shift[ShiftKey].addEventListener('click', () => {
        ShiftToggle = !ShiftToggle;
        KeyChanger();
    });
}

for (let UnfunctionalKeyIndex = 0; UnfunctionalKeyIndex < 5; UnfunctionalKeyIndex++) {
    UnfunctionalKeys[UnfunctionalKeyIndex].addEventListener('click', () => {
        alert('The Ctrl, Alt and Menu keys don\'t have any function');
    });
}