/*
15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the newperson you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
var guests = ["Tuba", "Kiran", "Tabassum"];
var remove_guest = "Kiran";
var new_guest = "Erha";
console.log(remove_guest + " will not join us for dinner today.");
guests[guests.indexOf(remove_guest)] = new_guest;
console.log(guests);
guests.map(function (items) {
    return console.log("Hey! ".concat(items, ", please come and join us for dinner today."));
});
