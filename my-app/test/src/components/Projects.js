import React from 'react';

class Projects extends React.Component {
  render() {
    return(
      <main className="projects-container">
        <div className="projects__carousel">
            <div className="projects__carousel__left-button">&lt;</div>
            <div className="projects__carousel__right-button">&gt;</div>
            <img className="projects__carousel__image" src="img/projects/projects-la-luxuria-img.png" alt="" data-slide="1"/>
            <img className="projects__carousel__image" src="img/projects/projects-rainbows-img.png" alt="" data-slide="2"/>
            <img className="projects__carousel__image" src="img/projects/projects-white-bloc-img.png" alt="" data-slide="3"/>
            <img className="projects__carousel__image" src="img/projects/projects-rocksteady-img.png" alt="" data-slide="4"/>
            <img className="projects__carousel__image" src="img/projects/projects-the-scalene-img.png" alt="" data-slide="5"/>
            <div className="projects__carousel__indicators">
                <div className="projects__carousel__indicators__icon"></div>
                <div className="projects__carousel__indicators__icon"></div>
                <div className="projects__carousel__indicators__icon"></div>
                <div className="projects__carousel__indicators__icon"></div>
                <div className="projects__carousel__indicators__icon"></div>
            </div>
        </div>
        <section className="projects__list">
            <div className="projects__list__modal">
                <div className="projects__list__modal__content">
                    <span className="projects__list__modal__content__title">La Luxuria</span>
                    <img className="projects__list__modal__content__image" src="img/projects/projects-la-luxuria-img.png" alt=""/>
                    <div className="projects__list__desc">
                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus lorem ac felis vestibulum ultrices. Donec in turpis porta, vehicula ipsum sit amet, blandit dolor. Suspendisse potenti. Praesent lacus purus, viverra a nisi id, lobortis accumsan velit. Quisque a malesuada dolor. Mauris lectus elit, gravida at purus ac, congue cursus odio. Etiam dignissim pharetra urna vitae sagittis. Curabitur a ornare velit, eu consectetur tellus. Suspendisse ultricies, ex tincidunt mattis sollicitudin, mi nibh lobortis lorem, sed vulputate augue est vel elit. Nullam scelerisque varius est, et feugiat est dignissim vel. Vivamus elementum magna ut orci porta molestie. Aliquam eu quam iaculis, blandit mauris non, elementum diam. Pellentesque vel maximus elit, eu convallis felis. Mauris lobortis ex vel risus congue, vitae congue ligula pretium. Nulla dapibus quam ac lacus tempus sodales.</p>
                        <p>Aliquam vitae mauris quis mi egestas maximus vel eget nulla. Integer est nisi, tempus nec urna a, commodo malesuada sapien. Donec euismod ornare dolor, vitae lobortis ex porttitor at. In ullamcorper in mauris sit amet placerat. Praesent tincidunt, felis in luctus interdum, nibh mi molestie ligula, sit amet semper leo enim in magna. Etiam tristique nulla ut nisi consequat, ut egestas sapien aliquet. Nulla aliquam tellus vel lorem hendrerit laoreet. Maecenas volutpat, massa et pretium eleifend, erat lorem vehicula nisl, a iaculis urna eros eu enim. Praesent eget tincidunt massa, tincidunt pulvinar diam.</p>
                    </div>
                    <div className="projects__list__desc">
                        <p>Fusce vitae sem id nisl luctus varius eu eu ligula. Aenean in blandit urna, iaculis lacinia ante. In et eros purus. Aliquam tristique nisi eget laoreet cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar dui at iaculis consequat. Vestibulum leo nibh, suscipit eget euismod at, sagittis ut nisi. Suspendisse gravida congue arcu, ac pretium massa ornare vel. Maecenas ut sapien massa. Curabitur eget enim at dui aliquam rutrum vel sed ante. Phasellus molestie ut nibh eget congue.</p>
                        <p>Vivamus ac tempor mauris. Duis fringilla eleifend facilisis. Pellentesque nec dignissim diam. Praesent urna nisi, lobortis vitae sem sed, maximus porttitor augue. Donec convallis magna at augue gravida pretium. Pellentesque blandit arcu non tincidunt placerat. Nam semper dapibus aliquet. Vivamus mattis tellus id dui egestas, sit amet cursus turpis porta.</p>
                    </div>
                    <div className="projects__list__desc">
                        <p>Duis ut felis et lectus fringilla ultricies et ut elit. Nulla tincidunt pretium mi quis dapibus. Maecenas venenatis egestas magna sodales tempus. Nullam in eros iaculis, dictum lectus sed, interdum lacus. Mauris id commodo arcu. Pellentesque at tellus sed massa pulvinar rutrum. Vivamus interdum vulputate tellus et finibus. Praesent rutrum suscipit ligula, sit amet sagittis odio commodo vitae. Ut porttitor, justo et tempus blandit, nunc sapien gravida lectus, vitae lacinia arcu neque in orci. Pellentesque laoreet ligula quis arcu faucibus pulvinar. Ut ultricies lacus dolor, eget ultricies dolor elementum ut. Aenean vel hendrerit lorem. Duis ut nunc auctor, scelerisque mauris quis, consequat urna. Ut condimentum placerat erat, in feugiat nibh dapibus congue. Etiam sed tempus augue.</p>
                        <p>Maecenas iaculis nisl ut turpis faucibus dictum. Vivamus ac ex magna. In et risus nec massa mattis rutrum. Integer vestibulum semper eros vel ornare. Duis tristique sapien dolor, quis porttitor libero ornare vel. Sed finibus elementum velit ut posuere. Integer ullamcorper ligula eu elit molestie rhoncus. Praesent congue orci et velit aliquam, pharetra euismod quam tristique. Mauris faucibus nulla eget viverra venenatis. Nulla fringilla molestie bibendum. Sed lacinia urna vestibulum tellus rhoncus, a dignissim mi malesuada. Mauris sem odio, bibendum ac efficitur id, sollicitudin dapibus dolor. Donec luctus lectus dolor, mattis maximus magna finibus sit amet.</p>
                    </div>
                    <div className="projects__list__desc">
                        <p>Etiam eget ornare est, ut ullamcorper mi. Sed cursus consectetur dolor, a bibendum metus. Nunc finibus neque id molestie pretium. Suspendisse dignissim a metus id viverra. Duis mollis aliquam lorem eu commodo. Morbi et mauris lobortis, pretium arcu in, laoreet arcu. Aenean ac imperdiet nisi. In vestibulum sapien non velit tincidunt, et vehicula libero hendrerit. Fusce sed pulvinar magna. Quisque augue augue, hendrerit ac turpis et, feugiat pharetra tortor. Suspendisse mattis fringilla arcu ornare mattis. Mauris quis eros vel nulla accumsan placerat. Aliquam quam mi, laoreet eget dolor non, dapibus gravida ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <p>In varius mauris a aliquet tempus. Quisque eros nunc, elementum eget tortor in, venenatis vehicula metus. Suspendisse vitae fringilla augue. Integer ut scelerisque tortor, sit amet ultricies ligula. Nam sit amet lobortis sem. Praesent dictum dapibus feugiat. Integer eget risus sollicitudin, placerat libero sit amet, rutrum nisi. Praesent vulputate facilisis lectus at pretium. Ut placerat nunc eu lectus vestibulum venenatis. Mauris consequat, nunc et finibus sodales, dolor lacus tempus massa, in porta diam orci et sem. Nulla eget nunc dui. Morbi gravida consequat auctor. Mauris feugiat massa risus. Fusce a enim mauris. Morbi finibus tortor in tempus porttitor.</p>
                    </div>
                    <div className="projects__list__desc">
                        <p>Pellentesque faucibus rutrum nisl, et gravida nisi maximus nec. Duis a neque sit amet nulla dignissim condimentum. Aenean quis feugiat mauris. Aliquam ut enim ut dui dignissim varius. Integer elementum vulputate lorem, nec iaculis lectus iaculis vitae. Nulla facilisi. Mauris imperdiet nisl et quam dictum faucibus. Quisque facilisis, nibh eget dignissim pulvinar, nunc ante sagittis sem, sed sollicitudin eros neque in est. Vestibulum lacinia sagittis tincidunt. Duis feugiat non mauris eget hendrerit. Fusce sapien felis, mollis quis rhoncus in, blandit a nunc. In eget faucibus magna. Curabitur id consequat neque. Etiam at posuere neque, et ullamcorper orci.</p>
                        <p>Ut pretium tortor neque, sed molestie risus porttitor id. Nam vitae ante tempus, sagittis mauris nec, posuere nisl. Duis finibus, massa cursus dignissim dignissim, metus neque convallis mauris, sed molestie nulla urna nec nunc. Aenean mollis ex neque, eget iaculis dolor mattis vitae. Nunc metus mi, ultrices nec aliquet ac, fringilla vel nisi. Cras sodales dui quis consequat sollicitudin. Donec nec aliquet leo, eu ultrices dui. Duis eleifend euismod mi, eget posuere lectus venenatis et. Donec sed metus dignissim, efficitur est non, consequat quam. Nulla varius accumsan purus nec gravida. Cras et pretium velit. Nam ultricies neque eros, ut accumsan quam vehicula quis. Maecenas tristique est vitae felis convallis scelerisque. Morbi eleifend venenatis congue. Nam ac sagittis quam.</p>
                    </div>
                </div>
            </div>
            <h2 className="projects__list__item">La Luxuria</h2>
            <h2 className="projects__list__item">Rainbows</h2>
            <h2 className="projects__list__item">White Bloc</h2>
            <h2 className="projects__list__item">Rocksteady</h2>
            <h2 className="projects__list__item">The Scalene</h2>
        </section>
      </main>
    );
  }
}

export default Projects;