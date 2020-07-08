class Group {
    constructor () {
        this.members = []
    }

    has (member) {
        return this.members.includes(member)
    }

    add (member) {
        if (this.members.includes(member)) {
            console.log(`${member} already part of the group`)
        } else {
            this.members.push(member)
        }
    }

    delete (member) {

    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false