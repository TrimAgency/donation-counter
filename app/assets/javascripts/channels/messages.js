// app/assets/javascripts/channels/messages.js

App.messages = App.cable.subscriptions.create("DonationsChannel', {
        received: function(data) {
            $("#messages").removeClass('hidden')
                return $('#messages').append(this.renderMessage(data));
        },

        renderMessage: function(data) {
            return "<p> <b>" + data.amount + "</b> </p>";
        }
        });
