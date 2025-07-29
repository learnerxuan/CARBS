// js/data.js
// This file will contain our temporary, client-side JSON data structure
// to simulate a backend database for the CARBS prototype.

// --- Mock User Data ---
const users = [
    { id: 'user001', username: 'clubleader', password: 'password123', role: 'Club Leader', club: 'Debate Society' },
    { id: 'user002', username: 'admin', password: 'adminpassword', role: 'Admin', club: null },
    { id: 'user003', username: 'sportsclub', password: 'password', role: 'Club Leader', club: 'Sports Club' },
    { id: 'user004', username: 'musicdept', password: 'musicpass', role: 'Staff', club: null },
    { id: 'user005', username: 'photoclub', password: 'password', role: 'Club Leader', club: 'Photography Club' },
    // New User Role
    { id: 'user006', username: 'resourcemgr', password: 'resourcemgrpass', role: 'ResourceManager', club: null },
    { id: 'user007', username: 'student', password: 'studentpass', role: 'Student', club: null }
];

// --- Mock Resource Data ---
const resources = [
    { id: 'res001', resourceName: 'Auditorium A', type: 'room', location: 'Block B', quantity: 1, available: 1 },
    { id: 'res002', resourceName: 'Meeting Room 1', type: 'room', location: 'Block C', quantity: 1, available: 1 },
    { id: 'res003', resourceName: 'Lecture Hall B', type: 'room', location: 'Block B', quantity: 1, available: 1 },
    { id: 'res004', resourceName: 'Conference Room 2', type: 'room', location: 'Block A', quantity: 1, available: 1 },
    { id: 'res005', resourceName: 'Projector Unit 1', type: 'equipment', location: 'IT Dept.', quantity: 3, available: 2 },
    { id: 'res006', resourceName: 'Sound System 2', type: 'equipment', location: 'Music Dept.', quantity: 1, available: 0 },
    { id: 'res007', resourceName: 'Microphone Set 3', type: 'equipment', location: 'Music Dept.', quantity: 5, available: 5 },
    { id: 'res008', resourceName: 'Van A', type: 'vehicle', location: 'Transport Yard', quantity: 1, available: 1 },
    { id: 'res009', resourceName: 'Bus B', type: 'vehicle', location: 'Transport Yard', quantity: 1, available: 1 },
    { id: 'res010', resourceName: 'Main Auditorium', type: 'room', location: 'Main Building', quantity: 1, available: 1 },
    { id: 'res011', resourceName: 'Exhibition Hall A', type: 'room', location: 'Fine Arts Building', quantity: 1, available: 1 },
    { id: 'res012', resourceName: 'Video Projector (High-Res)', type: 'equipment', location: 'IT Dept.', quantity: 1, available: 1 },
    { id: 'res013', resourceName: 'Canon DSLR Camera (Advanced)', type: 'equipment', location: 'Photography Studio', quantity: 2, available: 2 },
    { id: 'res014', resourceName: 'University Mini-bus (Large)', type: 'vehicle', location: 'Transport Yard', quantity: 1, available: 1 }
];

// --- Mock Activity Proposals Data ---
const activityProposals = [
    {
        id: 'prop001',
        activityName: 'Annual Charity Run',
        clubName: 'Debate Society',
        description: 'A charity run to raise funds for local orphanage.',
        proposedDate: '2025-09-20',
        startTime: '08:00',
        endTime: '12:00',
        expectedAttendees: 150,
        resourcesNeeded: 'Auditorium A',
        contactPerson: 'Alice Wonderland',
        contactEmail: 'alice@example.com',
        priority: 'high',
        status: 'Pending Approval',
        submissionDate: '2025-07-10'
    },
    {
        id: 'prop002',
        activityName: 'Robotics Workshop',
        clubName: 'IT Society',
        description: 'Beginner-friendly robotics workshop.',
        proposedDate: '2025-08-05',
        startTime: '10:00',
        endTime: '16:00',
        expectedAttendees: 30,
        resourcesNeeded: 'Meeting Room 1',
        contactPerson: 'Bob Builder',
        contactEmail: 'bob@example.com',
        priority: 'low',
        status: 'Approved',
        submissionDate: '2025-07-08'
    },
    {
        id: 'prop003',
        activityName: "Photography Club - Annual Exhibition",
        clubName: "Photography Club",
        proposedDate: "2025-08-15",
        startTime: "10:00",
        endTime: "16:00",
        description: "An exhibition showcasing the best works from our members over the past year.",
        expectedAttendees: 150,
        resourcesNeeded: "Exhibition Hall",
        contactPerson: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        priority: 'high',
        status: "Approved",
        submissionDate: "2025-07-10"
    },
    {
        id: 'prop004',
        activityName: "IT Club - Hackathon 2025",
        clubName: "IT Club",
        proposedDate: "2025-09-20",
        startTime: "09:00",
        endTime: "17:00",
        description: "A 24-hour hackathon for students to build innovative tech solutions.",
        expectedAttendees: 80,
        resourcesNeeded: "Computer lab",
        contactPerson: "John Smith",
        contactEmail: "john.smith@example.com",
        priority: 'high',
        status: "Pending Approval",
        submissionDate: "2025-07-15"
    },
    {
        id: 'prop005',
        activityName: "Photography Club - Basic Photo Editing Workshop",
        clubName: "Photography Club",
        proposedDate: "2025-09-05",
        startTime: "14:00",
        endTime: "16:00",
        description: "A workshop on photo editing basics using Adobe Lightroom and Photoshop.",
        expectedAttendees: 30,
        resourcesNeeded: "Computer lab",
        contactPerson: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        priority: 'low',
        status: "Pending Approval",
        submissionDate: "2025-07-16"
    },
    {
        id: 'prop006',
        activityName: "Chess Club - Weekly Meetup",
        clubName: "Chess Club",
        proposedDate: "2025-08-01",
        startTime: "16:00",
        endTime: "18:00",
        description: "Casual weekly meetup for members to play chess and practice strategies.",
        expectedAttendees: 15,
        resourcesNeeded: "Room 1",
        contactPerson: "Alice Johnson",
        contactEmail: "alice.j@example.com",
        priority: 'low',
        status: "Approved",
        submissionDate: "2025-07-05"
    },
    {
        id: 'prop007',
        activityName: "Photography Club - Urban Exploration Trip",
        clubName: "Photography Club",
        proposedDate: "2025-08-25",
        startTime: "09:00",
        endTime: "17:00",
        description: "A trip to a local urban area to practice street and architectural photography.",
        expectedAttendees: 20,
        resourcesNeeded: "Mini-bus",
        contactPerson: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        priority: 'high',
        status: "Rejected",
        submissionDate: "2025-07-12"
    }
];

// --- Mock Resource Bookings Data ---
const resourceBookings = [
    { id: 'book001', resourceId: 'res001', resourceName: 'Auditorium A', date: '2025-07-16', startTime: '09:00', endTime: '11:00', purpose: 'Drama Club Rehearsal', bookedBy: 'Debate Society', priority: 'low', status: 'Approved' },
    { id: 'book002', resourceId: 'res002', resourceName: 'Meeting Room 1', date: '2025-07-16', startTime: '13:00', endTime: '15:00', purpose: 'IT Society Meeting', bookedBy: 'IT Society', priority: 'low', status: 'Approved' },
    { id: 'book003', resourceId: 'res005', resourceName: 'Projector Unit 1', date: '2025-07-16', startTime: '10:00', endTime: '12:00', purpose: 'Debate Team Practice', bookedBy: 'Debate Society', priority: 'high', status: 'Pending' },
    { id: 'book004', resourceId: 'res008', resourceName: 'Van A', date: '2025-07-17', startTime: '08:00', endTime: '17:00', purpose: 'Field Trip', bookedBy: 'Outdoor Club', priority: 'high', status: 'Approved' },
    { id: 'book005', resourceId: 'res001', resourceName: 'Auditorium A', date: '2025-07-18', startTime: '14:00', endTime: '17:00', purpose: 'Music Club Concert Prep', bookedBy: 'Music Club', priority: 'low', status: 'Pending' },
    { id: 'book006', resourceId: 'res002', resourceName: 'Meeting Room 1', date: '2025-08-01', startTime: '09:00', endTime: '10:30', purpose: 'Admin Staff Meeting', bookedBy: 'Admin', priority: 'high', status: 'Approved' },
    {
        id: 'book007',
        resourceId: 'res010',
        resourceName: 'Main Auditorium',
        date: '2025-09-20',
        startTime: '09:00',
        endTime: '17:00',
        purpose: 'IT Club Hackathon',
        bookedBy: 'IT Club',
        priority: 'high',
        status: 'Approved'
    },
    {
        id: 'book008',
        resourceId: 'res011',
        resourceName: 'Exhibition Hall A',
        date: '2025-08-15',
        startTime: '10:00',
        endTime: '16:00',
        purpose: 'Annual Photography Exhibition',
        bookedBy: 'Photography Club',
        priority: 'high',
        status: 'Approved'
    },
    {
        id: 'book009',
        resourceId: 'res013',
        resourceName: 'Canon DSLR Camera (Advanced)',
        date: '2025-08-16',
        startTime: '14:00',
        endTime: '17:00',
        purpose: 'Urban Photography Practice',
        bookedBy: 'Photography Club',
        priority: 'low',
        status: 'Pending'
    }
];

// Make these variables globally accessible (for this simple prototype)
window.mockData = {
    users,
    resources,
    activityProposals,
    resourceBookings
};

console.log("Mock data loaded:", window.mockData);