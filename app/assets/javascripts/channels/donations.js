App.donations = App.cable.subscriptions.create("DonationsChannel', {
        received: function(data) {
            $("#donations").removeClass('hidden')
                return $('#donations').append(this.renderMessage(data));
        },

        renderMessage: function(data) {
            return "<p> <b>" + data.amount + "</b> </p>";
        }
        });
