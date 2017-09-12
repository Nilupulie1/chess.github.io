$( function() {
    $( ".chessIcon" ).draggable();
    $( "#dropable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
} );