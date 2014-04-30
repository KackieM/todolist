$('#basicModal').modal(options);

$('#basicModal').on('shown.bs.modal', function (e) {
    alert('Modal is successfully shown!');
});