class Group {
    constructor () {
        this.members = []
    }

    has(member) {
        return this.members.includes(member)
    }

    add(member) {
        if (this.members.includes(member)) {
            console.log(`${member} already part of the group`)
        } else {
            this.members.push(member)
        }
    }

    delete(member) {
        this.members = this.members.filter((m) => m !== member)
    }

    static from(iterable) {
        let group = new Group()
        for (const element of iterable) {
            if (group.members.includes(element)) {
                console.log(`${element} already part of the group`)
            } else {
                group.members.push(element)
            }
        }
        return group
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