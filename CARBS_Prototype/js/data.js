// js/data.js
// This file will contain our temporary, client-side JSON data structure
// to simulate a backend database for the CARBS prototype.

// --- Mock User Data ---
const users = [
    { id: 'user001', username: 'clubleader', password: 'password123', role: 'Club Leader', club: 'Debate Society' },
    { id: 'user002', username: 'admin', password: 'adminpassword', role: 'Admin', club: null },
    { id: 'user003', username: 'sportsclub', password: 'password', role: 'Club Leader', club: 'Sports Club' },
    { id: 'user004', username: 'musicdept', password: 'musicpass', role: 'Staff', club: null }
];

// --- Mock Resource Data ---
const resources = [
    { id: 'res001', name: 'Auditorium A', type: 'room', capacity: 200, features: ['projector', 'sound system'] },
    { id: 'res002', name: 'Meeting Room 1', type: 'room', capacity: 20, features: ['whiteboard', 'TV screen'] },
    { id: 'res003', name: 'Lecture Hall B', type: 'room', capacity: 150, features: ['projector', 'microphone'] },
    { id: 'res004', name: 'Conference Room 2', type: 'room', capacity: 10, features: ['video conferencing'] },
    { id: 'res005', name: 'Projector Unit 1', type: 'equipment', quantity: 3, description: 'High-Lumen Projector' },
    { id: 'res006', name: 'Sound System 2', type: 'equipment', quantity: 1, description: 'Portable PA System' },
    { id: 'res007', name: 'Microphone Set 3', type: 'equipment', quantity: 5, description: 'Wireless Microphones' },
    { id: 'res008', name: 'Van A', type: 'vehicle', capacity: 12, licenseRequired: 'Class D' },
    { id: 'res009', name: 'Bus B', type: 'vehicle', capacity: 40, licenseRequired: 'Class E' }
];

// --- Mock Activity Proposals Data ---
// This would be populated when users 'propose activity'
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
        resourcesNeeded: 'Auditorium A (for registration), Sound System 2',
        contactPerson: 'Alice Wonderland',
        contactEmail: 'alice@example.com',
        status: 'Pending Approval' // Can be 'Pending Approval', 'Approved', 'Rejected'
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
        status: 'Approved'
    }
];

// --- Mock Resource Bookings Data ---
// This would be populated when users 'book resource'
// Note: dates and times should align with your check_availability.html mock logic for consistency.
const resourceBookings = [
    { id: 'book001', resourceId: 'res001', resourceName: 'Auditorium A', date: '2025-07-16', startTime: '09:00', endTime: '11:00', purpose: 'Drama Club Rehearsal', bookedBy: 'Debate Society' },
    { id: 'book002', resourceId: 'res002', resourceName: 'Meeting Room 1', date: '2025-07-16', startTime: '13:00', endTime: '15:00', purpose: 'IT Society Meeting', bookedBy: 'IT Society' },
    { id: 'book003', resourceId: 'res005', resourceName: 'Projector Unit 1', date: '2025-07-16', startTime: '10:00', endTime: '12:00', purpose: 'Debate Team Practice', bookedBy: 'Debate Society' },
    { id: 'book004', resourceId: 'res008', resourceName: 'Van A', date: '2025-07-17', startTime: '08:00', endTime: '17:00', purpose: 'Field Trip', bookedBy: 'Outdoor Club' },
    { id: 'book005', resourceId: 'res001', resourceName: 'Auditorium A', date: '2025-07-18', startTime: '14:00', endTime: '17:00', purpose: 'Music Club Concert Prep', bookedBy: 'Music Club' },
    { id: 'book006', resourceId: 'res002', resourceName: 'Meeting Room 1', date: '2025-08-01', startTime: '09:00', endTime: '10:30', purpose: 'Admin Staff Meeting', bookedBy: 'Admin' }
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