<?php
// Get the form data using the POST method
$name = $_POST['st_name'];
$student_id = $_POST['st_ID'];
$department = $_POST['st_department'];
$feedback = $_POST['st_feedback'];

// Display the form data
echo "<h2>Feedback Submitted</h2>";
echo "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
echo "<p><strong>Student ID:</strong> " . htmlspecialchars($student_id) . "</p>";
echo "<p><strong>Department:</strong> " . htmlspecialchars($department) . "</p>";
echo "<p><strong>Feedback:</strong> " . nl2br(htmlspecialchars($feedback)) . "</p>";
?>
