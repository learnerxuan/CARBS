// js/data.js
// This file will contain our temporary, client-side JSON data structure
// to simulate a backend database for the CARBS prototype.

// --- Mock User Data ---
const users = [
    { id: 'user001', username: 'clubleader', password: 'password123', role: 'Club Leader', club: 'Debate Society' },
    { id: 'user002', username: 'admin', password: 'adminpassword', role: 'Admin', club: null },
    { id: 'user003', username: 'sportsclub', password: 'password', role: 'Club Leader', club: 'Sports Club' },
    { id: 'user004', username: 'musicdept', password: 'musicpass', role: 'Staff', club: null },
    // Added a user for Photography Club to match dashboard
    { id: 'user005', username: 'photoclub', password: 'password', role: 'Club Leader', club: 'Photography Club' }
];

// --- Mock Resource Data ---
const resources = [
    // Original resources from your previous data
    { id: 'res001', name: 'Auditorium A', type: 'room', capacity: 200, features: ['projector', 'sound system'] },
    { id: 'res002', name: 'Meeting Room 1', type: 'room', capacity: 20, features: ['whiteboard', 'TV screen'] },
    { id: 'res003', name: 'Lecture Hall B', type: 'room', capacity: 150, features: ['projector', 'microphone'] },
    { id: 'res004', name: 'Conference Room 2', type: 'room', capacity: 10, features: ['video conferencing'] },
    { id: 'res005', name: 'Projector Unit 1', type: 'equipment', quantity: 3, description: 'High-Lumen Projector' },
    { id: 'res006', name: 'Sound System 2', type: 'equipment', quantity: 1, description: 'Portable PA System' },
    { id: 'res007', name: 'Microphone Set 3', type: 'equipment', quantity: 5, description: 'Wireless Microphones' },
    { id: 'res008', name: 'Van A', type: 'vehicle', capacity: 12, licenseRequired: 'Class D' },
    { id: 'res009', name: 'Bus B', type: 'vehicle', capacity: 40, licenseRequired: 'Class E' },
    // Resources from my added sample data (re-IDed to avoid clashes)
    { id: 'res010', name: 'Main Auditorium', type: 'room', capacity: 500, features: ['stage', 'lighting', 'sound system'] },
    { id: 'res011', name: 'Exhibition Hall A', type: 'room', capacity: 300, features: ['display panels', 'spotlights'] },
    { id: 'res012', name: 'Video Projector (High-Res)', type: 'equipment', quantity: 1, description: '4K Projector' },
    { id: 'res013', name: 'Canon DSLR Camera (Advanced)', type: 'equipment', quantity: 2, description: 'Professional DSLR with various lenses' },
    { id: 'res014', name: 'University Mini-bus (Large)', type: 'vehicle', capacity: 20, licenseRequired: 'Class D' }
];

// --- Mock Activity Proposals Data ---
const activityProposals = [
    // Original proposals from your previous data
    {
        id: 'prop001',
        activityName: 'Annual Charity Run',
        clubName: 'Debate Society',
        description: 'A charity run to raise funds for local orphanage.',
        proposedDate: '2025-09-20',
        startTime: '08:00',
        endTime: '12:00',
        expectedAttendees: 150,
        resourcesNeeded: 'Auditorium A (for registration), Sound System 2',
        contactPerson: 'Alice Wonderland',
        contactEmail: 'alice@example.com',
        priority: 'high', // Added priority from previous update
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
        resourcesNeeded: 'Meeting Room 1, Projector Unit 1',
        contactPerson: 'Bob Builder',
        contactEmail: 'bob@example.com',
        priority: 'low', // Added priority from previous update
        status: 'Approved',
        submissionDate: '2025-07-08'
    },
    // Proposals from my added sample data (re-IDed to avoid clashes)
    {
        id: 'prop003', // Was id: 1
        activityName: "Photography Club - Annual Exhibition",
        clubName: "Photography Club",
        proposedDate: "2025-08-15",
        startTime: "10:00",
        endTime: "16:00",
        description: "An exhibition showcasing the best works from our members over the past year.",
        expectedAttendees: 150,
        resourcesNeeded: "Exhibition Hall, lighting equipment, display panels.",
        contactPerson: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        priority: 'high',
        status: "Approved",
        submissionDate: "2025-07-10"
    },
    {
        id: 'prop004', // Was id: 2
        activityName: "IT Club - Hackathon 2025",
        clubName: "IT Club",
        proposedDate: "2025-09-20",
        startTime: "09:00",
        endTime: "17:00",
        description: "A 24-hour hackathon for students to build innovative tech solutions.",
        expectedAttendees: 80,
        resourcesNeeded: "Computer lab with high-speed internet, power outlets, monitors.",
        contactPerson: "John Smith",
        contactEmail: "john.smith@example.com",
        priority: 'high',
        status: "Pending Approval",
        submissionDate: "2025-07-15"
    },
    {
        id: 'prop005', // Was id: 3
        activityName: "Photography Club - Basic Photo Editing Workshop",
        clubName: "Photography Club",
        proposedDate: "2025-09-05",
        startTime: "14:00",
        endTime: "16:00",
        description: "A workshop on photo editing basics using Adobe Lightroom and Photoshop.",
        expectedAttendees: 30,
        resourcesNeeded: "Computer lab, instructor, software licenses.",
        contactPerson: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        priority: 'low',
        status: "Pending Approval",
        submissionDate: "2025-07-16"
    },
    {
        id: 'prop006', // Was id: 4
        activityName: "Chess Club - Weekly Meetup",
        clubName: "Chess Club",
        proposedDate: "2025-08-01",
        startTime: "16:00",
        endTime: "18:00",
        description: "Casual weekly meetup for members to play chess and practice strategies.",
        expectedAttendees: 15,
        resourcesNeeded: "Common room with tables and chairs.",
        contactPerson: "Alice Johnson",
        contactEmail: "alice.j@example.com",
        priority: 'low',
        status: "Approved",
        submissionDate: "2025-07-05"
    },
    {
        id: 'prop007', // Was id: 5
        activityName: "Photography Club - Urban Exploration Trip",
        clubName: "Photography Club",
        proposedDate: "2025-08-25",
        startTime: "09:00",
        endTime: "17:00",
        description: "A trip to a local urban area to practice street and architectural photography.",
        expectedAttendees: 20,
        resourcesNeeded: "Mini-bus for transportation.",
        contactPerson: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        priority: 'high',
        status: "Rejected",
        submissionDate: "2025-07-12"
    }
];

// --- Mock Resource Bookings Data ---
const resourceBookings = [
    // Original bookings from your previous data
    { id: 'book001', resourceId: 'res001', resourceName: 'Auditorium A', date: '2025-07-16', startTime: '09:00', endTime: '11:00', purpose: 'Drama Club Rehearsal', bookedBy: 'Debate Society', priority: 'low', status: 'Approved' }, // Added priority & status
    { id: 'book002', resourceId: 'res002', resourceName: 'Meeting Room 1', date: '2025-07-16', startTime: '13:00', endTime: '15:00', purpose: 'IT Society Meeting', bookedBy: 'IT Society', priority: 'low', status: 'Approved' }, // Added priority & status
    { id: 'book003', resourceId: 'res005', resourceName: 'Projector Unit 1', date: '2025-07-16', startTime: '10:00', endTime: '12:00', purpose: 'Debate Team Practice', bookedBy: 'Debate Society', priority: 'high', status: 'Pending' }, // Added priority & status
    { id: 'book004', resourceId: 'res008', resourceName: 'Van A', date: '2025-07-17', startTime: '08:00', endTime: '17:00', purpose: 'Field Trip', bookedBy: 'Outdoor Club', priority: 'high', status: 'Approved' }, // Added priority & status
    { id: 'book005', resourceId: 'res001', resourceName: 'Auditorium A', date: '2025-07-18', startTime: '14:00', endTime: '17:00', purpose: 'Music Club Concert Prep', bookedBy: 'Music Club', priority: 'low', status: 'Pending' }, // Added priority & status
    { id: 'book006', resourceId: 'res002', resourceName: 'Meeting Room 1', date: '2025-08-01', startTime: '09:00', endTime: '10:30', purpose: 'Admin Staff Meeting', bookedBy: 'Admin', priority: 'high', status: 'Approved' }, // Added priority & status
    // Bookings from my added sample data (re-IDed to avoid clashes, and adjusted resourceId/resourceName to match combined resources)
    {
        id: 'book007', // Was book001
        resourceId: 'res010', // Changed from R001 to match new ID
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
        id: 'book008', // Was book002
        resourceId: 'res011', // Changed from R002 to match new ID
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
        id: 'book009', // Was book003
        resourceId: 'res013', // Changed from E002 to match new ID
        resourceName: 'Canon DSLR Camera (Advanced)', // Updated name
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
// In a more complex app, you'd use modules or a state management pattern.
window.mockData = {
    users,
    resources,
    activityProposals,
    resourceBookings
};

console.log("Mock data loaded:", window.mockData);