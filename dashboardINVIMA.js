/*
 * Bootstrap-based responsive mashup
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
*/

var config = {
    host: 'drageloz.us.qlikcloud.com',
    prefix: "/",
    port: 443,
    isSecure: true
    //webIntegrationId: 'web-integration-id-here' // only needed in QCS and QSEoK
};
//to av//oid errors in workbench: you can remove this when you have added an app
var app;
require( ["https://drageloz.us.qlikcloud.com/js/qlik"], function ( qlik ) {

	var control = false;
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		if ( !control ) {
			control = true;
			$( '#popup' ).delay( 1000 ).fadeIn( 1000 ).delay( 11000 ).fadeOut( 1000 );
		}
	} );

	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );
	if ( $( 'ul#qbmlist li' ).length === 0 ) {
		$( '#qbmlist' ).append( "<li><a>No bookmarks available</a></li>" );
	}
	$( "body" ).css( "overflow: hidden;" );
	function AppUi ( app ) {
		var me = this;
		this.app = app;
		app.global.isPersonalMode( function ( reply ) {
			me.isPersonalMode = reply.qReturn;
		} );
		app.getAppLayout( function ( layout ) {
			$( "#title" ).html( layout.qTitle );
			$( "#title" ).attr( "title", "Last reload:" + layout.qLastReloadTime.replace( /T/, ' ' ).replace( /Z/, ' ' ) );
			//TODO: bootstrap tooltip ??
		} );
		app.getList( 'SelectionObject', function ( reply ) {
			$( "[data-qcmd='back']" ).parent().toggleClass( 'disabled', reply.qSelectionObject.qBackCount < 1 );
			$( "[data-qcmd='forward']" ).parent().toggleClass( 'disabled', reply.qSelectionObject.qForwardCount < 1 );
		} );
		app.getList( "BookmarkList", function ( reply ) {
			var str = "";
			reply.qBookmarkList.qItems.forEach( function ( value ) {
				if ( value.qData.title ) {
					str += '<li><a data-id="' + value.qInfo.qId + '">' + value.qData.title + '</a></li>';
				}
			} );
			str += '<li><a data-cmd="create">Create</a></li>';
			$( '#qbmlist' ).html( str ).find( 'a' ).on( 'click', function () {
				var id = $( this ).data( 'id' );
				if ( id ) {
					app.bookmark.apply( id );
				} else {
					var cmd = $( this ).data( 'cmd' );
					if ( cmd === "create" ) {
						$( '#createBmModal' ).modal();
					}
				}
			} );
		} );
	}

	//callbacks -- inserted here --
	//open apps -- inserted here --
//	var app = qlik.openApp('protocolosINVIMA.qvf', config);
//open app and get objects
var app = qlik.openApp( "protocolosINVIMA.qvf", config );
$( ".qvobject" ).each( function () {
	var qvid = $( this ).data( "qvid" );
	app.getObject( this, qvid ).then( function ( object ) {
		qvobjects[qvid] = object;
	} );
} );

	//get objects -- inserted here --
	app.getObject('QV11','R');
	app.getObject('QV10','sjjGu'); 
	app.getObject('QV09','sHbKzaJ');
	app.getObject('QV08','hKrxWa');
	app.getObject('QV07','PzLXTW');
	app.getObject('QV06','vmjEe');
	app.getObject('QV05','GDaKyD');
	app.getObject('QV03','GDaKyD');
	app.getObject('QV04','pkAupnv');
	app.getObject('QV02','UeVHJvD');
	app.getObject('QV01','SZMFY');
	
	
	//create cubes and lists -- inserted here --
	
	if ( app ) {
		new AppUi( app );
	}
	

} );
