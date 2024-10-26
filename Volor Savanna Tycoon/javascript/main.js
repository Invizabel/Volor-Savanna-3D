function draw_lion()
{
    const lion_array = [];

    // head
    const x_vector = new THREE.Vector3(1, 0, 0);
    const y_vector = new THREE.Vector3(0, 1, 0);
    const z_vector = new THREE.Vector3(0, 0, 1);
    
    const head_geometry = new THREE.BoxGeometry(1, 1, 1);
    const head_material = new THREE.MeshBasicMaterial({color: "yellow"});
    const head_voxel = new THREE.Mesh(head_geometry, head_material);
    lion_array.push(head_voxel);

    // right eye
    const right_eye_geometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
    const right_eye_material = new THREE.MeshBasicMaterial({color: "brown"});
    const right_eye_voxel = new THREE.Mesh(right_eye_geometry, right_eye_material);

    right_eye_voxel.translateOnAxis(y_vector, 0.25);
    right_eye_voxel.translateOnAxis(x_vector, -0.25);
    right_eye_voxel.translateOnAxis(z_vector, 0.5);
    lion_array.push(right_eye_voxel);

     // left eye
    const left_eye_geometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
    const left_eye_material = new THREE.MeshBasicMaterial({color: "brown"});
    const left_eye_voxel = new THREE.Mesh(left_eye_geometry, left_eye_material);

    left_eye_voxel.translateOnAxis(y_vector, 0.25);
    left_eye_voxel.translateOnAxis(x_vector, 0.25);
    left_eye_voxel.translateOnAxis(z_vector, 0.5);
    lion_array.push(left_eye_voxel);


    return lion_array;
}

function main()
{
    // renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var lion_array = draw_lion();

    for (let count = 0; count < lion_array.length; count++)
    {
        scene.add(lion_array[count]);
    }
    
    camera.position.z = 5;

    move_up = false;
    move_down = false;
    move_left = false;
    move_right = false;

    document.addEventListener("keydown", on_document_key_down, false);
    function on_document_key_down(event)
    {
        var keyCode = event.which;
        if (keyCode == 87)
        {
            move_down = true;
        }

        else if (keyCode == 83)
        {
            move_up = true;
        }
        
        else if (keyCode == 65)
        {
            move_left = true;
        }

        else if (keyCode == 68)
        {
            move_right = true;
        }
    };

    document.addEventListener("keyup", on_document_key_up, false);
    function on_document_key_up(event)
    {
        var keyCode = event.which;

        if (keyCode == 83)
        {
            move_up = false;
        }
        
        else if (keyCode == 87)
        {
            move_down = false;
        }

        else if (keyCode == 65)
        {
            move_left = false;
        }

        else if (keyCode == 68)
        {
            move_right = false;
        }
    };

    function draw()
    {
        requestAnimationFrame(draw);

        const x_vector = new THREE.Vector3(1, 0, 0);
        const y_vector = new THREE.Vector3(0, 1, 0);
        const z_vector = new THREE.Vector3(0, 0, 1);

        for (let count = 0; count < lion_array.length; count++)
        {
            if (move_up)
            {
                lion_array[count].translateOnAxis(y_vector, -0.1);
            }

            if (move_down)
            {
                lion_array[count].translateOnAxis(y_vector, 0.1);
            }

            if (move_left)
            {
                lion_array[count].translateOnAxis(x_vector, -0.1);
            }

            if (move_right)
            {
                lion_array[count].translateOnAxis(x_vector, 0.1);
            }
        }
        renderer.render(scene, camera);
    }

    draw();    
}
    
main();
