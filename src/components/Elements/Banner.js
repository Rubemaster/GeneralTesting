import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {Row, Col} from 'react-bootstrap';

export function LocalBanner(props) {

    return <div class="fixed-top h-75" style={{/*backgroundImage: "url(\"banner.jpg\")"*/ border: "1px solid black", backgroundSize: "cover", zIndex: -1}}><Row><Col ></Col></Row></div>;
}