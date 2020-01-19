import React, {Component} from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import style from '../styles/titleCardStyle'
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Typography from "@material-ui/core/Typography/Typography";

class TitleCard extends Component {

    render(){
        return (
        <Card style={ style.card}>
            <CardContent>
                <CardMedia
                    style={style.media}
                    image={`/img/posters/${this.props.titleDetails.poster}`}
                    title={this.props.titleDetails.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.titleDetails.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.titleDetails.description}
                    </Typography>
                </CardContent>

            </CardContent>
        </Card>)
    }
}

export default TitleCard;


