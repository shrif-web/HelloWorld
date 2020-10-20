const { response } = require("express");

$(document).ready(() => {
    $('#nav-brand').hover(() => {
        $('#dev')
            .removeClass('bg-warning')
            .addClass('bg-transparent')
            .removeClass('text-dark')
            .addClass('text-white');
        $('#ama')
            .addClass('bg-warning')
            .removeClass('bg-transparent')
            .addClass('text-dark')
            .removeClass('text-white');

        $('#nav-icon').addClass('text-warning');
    }, () => {
        $('#ama')
            .removeClass('bg-warning')
            .addClass('bg-transparent')
            .removeClass('text-dark')
            .addClass('text-white');
        $('#dev')
            .addClass('bg-warning')
            .removeClass('bg-transparent')
            .addClass('text-dark')
            .removeClass('text-white');

        $('#nav-icon').removeClass('text-warning')
    });
});

function showMessage(title, message) {
    $('#response-title').html(title);
    $('#response-message').html(message);
    $('#response-modal').modal('show');
}

function request(name, url) {
    $.get(url)
        .done(response => showMessage(`${name} response`, response))
        .fail(response => showMessage(`${name} error: ${response.status}!`, response.statusText));
}