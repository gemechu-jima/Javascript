
const paragraph=[
    `Paragraph development begins with the formulation of the guiding idea or question. This idea or
    question directs the paragraph’s development. Often, the guiding idea of a paragraph will appear
    in the form of a topic sentence. In some cases, you may need more than one sentence to express a
    paragraph’s guiding idea or question.`,`The next movement in paragraph development is an explanation of each example and its
    relevance to the topic sentence and rationale that were stated at the beginning of the paragraph.
    This explanation shows readers why you chose to use this/or these particular examples as
    evidence to support the major claim, or focus, in your paragraph.`,
    `Continue the pattern of giving examples and explaining them until all points/examples that the
    writer deems necessary have been made and explained. NONE of your examples should be left
    unexplained. You might be able to explain the relationship between the example and the topic
    sentence in the same sentence which introduced the example.`, `More often, however, you will
    need to explain that relationship in a separate sentence.To define what it means to be a
     feminist and thus determine if Taylor Swift is a feminist,`,
    `we might start with what a feminist does. How should someone who calls herself a feminist act?
    Those who want a more inclusive definition say a feminist simply advocates for women. Those
    who want a more rigid definition believe that a feminist should speak out on certain things in a
    certain way. According to Guardian columnist Jessica Valenti, feminism means nothing if
    everyone is a feminist. `, `“Without some boundaries for claiming the word feminist, it becomes
    meaningless,” she declared in 2014. The first boundary she had in mind? Abortion politics. “So
    once and for all: Can you be an anti-choice feminist? No.” Likewise, January’s anti-Trump
    Women’s March, claiming to represent “all women” of “all backgrounds” in statements to the
    media and in its branding, argued as much with regard to abortion.`, `While the group initially
    approved pro-life groups led by women as partners, it removed them after a feminist uproar—
    and apologized “for this error.” That uproar included Valenti, who tweeted that she was
    “horrified.” The consensus seems clear: Pro-life women are not welcome in the feminist
    movement.`, `Their definition of what it means to be a feminist is restricted to people who speak
    out with the “correct” set of political views or morals. Their attacks reveal something very ugly
    about modern feminism: While today’s feminists claim to champion the rights of all women,
    they speak only for women who agree with them. Is speaking out with certain “correct” political
    views the test for what it means to be a feminist? If so, then Taylor Swift is not a feminist.
    Rinse and repeat the 5 steps for each paragraph!`
]

const form = document.querySelector("form");
const numberParagraph=document.getElementById('number-paragraph');
const result=document.querySelector('.result');

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    console.log('hello');
    const value=parseInt(numberParagraph.value);
    console.log(value);
    const randomly=Math.trunc(Math.random()*paragraph.length+1 );
    console.log(randomly);
    if(isNaN(value) || value<=0  || value>9){
        result.innerHTML=`<p>${paragraph[randomly]}</p>`;
    }else{
        let textContainer=paragraph.slice(0, value)
        textContainer=textContainer.map(function(text){
           return `<p>${text}</p>`
        }).join("");
        result.innerHTML=textContainer;
    }
})