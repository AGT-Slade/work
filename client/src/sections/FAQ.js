import React from 'react';

const FAQ = () => {
    return (
        <section className="faq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <h3>What blockchain is $MITH built on?</h3>
                        <p>$MITH is built on the Solana blockchain, known for its high-speed transactions and low fees.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Why Solana?</h3>
                        <p>Solana offers unmatched scalability, speed, and cost-efficiency, making it the perfect choice for $MITH.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How do I store $MITH?</h3>
                        <p>You can store $MITH in any Solana-compatible wallet, such as Phantom or Solflare.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;