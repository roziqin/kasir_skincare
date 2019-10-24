<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery load() Demo</title>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    $("button").click(function(){
        $("#box").load("test-content.php");
    });
});
</script>
</head>
<body>
    <div id="box">
        <h2>Click button to load new content inside DIV box</h2>
    </div>
    <button type="button">Load Content</button>
</body>
</html>