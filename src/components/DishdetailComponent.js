import React from 'react';
import moment from 'moment';

import { postComment } from '../redux/ActionCreators';
 

import { Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';





    function RenderDish({dishprops}) {
        if (dishprops.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (dishprops.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{dishprops.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (dishprops.dish != null)
        {
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dishprops.dish.image} alt={dishprops.dish.name} />
                <CardBody>
                  <CardTitle>{dishprops.dish.name}</CardTitle>
                  <CardText>{dishprops.dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );
        }
    else
        return(
            <div></div>
        );

    }

    function RenderComments({comments}) {
        return (
        <Stagger in>
        {
         comments.map((comment) => {
        
            return(
                <Fade in>
                <div key={comment.id}>
                    
                    <ul className="list-unstyled">
                    <li>{comment.comment}</li> 
                    <li>{"--" + comment.author + " " + moment(comment.date).format("MMM Do YYYY")}</li>          
                    </ul>
                </div>
                </Fade>
            );
        
            })}
            </Stagger>
        );
           
      
    }
   
    const  DishDetail = (props) => {

        if (props.dish != null)
        {
        return (
           
           
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishprops={props} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                    <CommentForm postComment={props.postComment}
                            dishId={props.dish.id} />
                    </div>
                    
                    
                </div>
                </div>
            
        );
        }
        else{
            return(
                <div></div>

            );
        }
        
        
}
      
    

export default DishDetail;