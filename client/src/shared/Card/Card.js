import React, { createContext } from 'react';


const CardContext = React.createContext();

const Card = ({ children, variant = 'default', isInteractive, isFloating }) => {
    const cardClasses = [
        'card',
        variant,
        isInteractive && 'interactive',
        isFloating && 'floating'
    ].filter(Boolean).join(' ');

    return (
        <CardContext.Provider value={{ variant }}>
            <article className={cardClasses}>
                {children}
            </article>
        </CardContext.Provider>
    );
};

const Media = ({ src, alt }) => (
    <div className="card-media">
        <img src={src} alt={alt} />
    </div>
);

const Badge = ({ children }) => (
    <span className="card-badge">{children}</span>
);

const Content = ({ children }) => (
    <div className="card-content">
        {children}
    </div>
);

const Title = ({ children }) => (
    <h2 className="card-title">{children}</h2>
);

const Tags = ({ items = [] }) => (
    <div className="card-tags">
        {items.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
        ))}
    </div>
);

const Stats = ({ data = {} }) => (
    <div className="card-stats">
        {Object.entries(data).map(([label, value]) => (
            <div key={label} className="stat-item">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
            </div>
        ))}
    </div>
);

const Actions = ({ children }) => (
    <div className="card-actions">
        {children}
    </div>
);

// Compose the compound component
Card.Media = Media;
Card.Badge = Badge;
Card.Content = Content;
Card.Title = Title;
Card.Tags = Tags;
Card.Stats = Stats;
Card.Actions = Actions;

// Usage Example:
const CardExample = () => (
    <Card isInteractive isFloating>
        <Card.Badge>New</Card.Badge>
        <Card.Media src="image.jpg" alt="Card Image" />
        <Card.Content>
            <Card.Title>Awesome Card</Card.Title>
            <p>This is a compound card component</p>
            <Card.Tags items={['React', 'CSS', 'JavaScript']} />
            <Card.Stats data={{
                Views: '1.2k',
                Likes: '450',
                Comments: '23'
            }} />
            <Card.Actions>
                <button>Read More</button>
                <button>Share</button>
            </Card.Actions>
        </Card.Content>
    </Card>
);

export default Card;
