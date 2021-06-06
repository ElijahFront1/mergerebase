import React from 'react'
import { Card } from 'react-bootstrap'


interface NewsItemProps {
    title: string;
    description: string;
    author: {
        name: string,
        lastname: string,
    };
    created_at: string;
}

function NewsItem({ title, description, author, created_at }: NewsItemProps) {
    console.log(title);
    return (
        <Card style={{
            width: '50vw',
            minWidth: 400,
            margin: 'auto',
            marginTop: 20
        }}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}{description}{' '}
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{`${author.name} ${author.lastname}`}</cite>
                        <span> {created_at}</span>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default NewsItem
