import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Form,
  Grid,
  Container,
  Divider,
  Header
} from "semantic-ui-react";

const Checkboxes = () => {
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);
  const [ugly, setUgly] = useState(false);
  const [disableGood, setDisableGood] = useState(false);
  const [disableBad, setDisableBad] = useState(false);
  const [disableUgly, setDisableUgly] = useState(false);

  const handleGood = () => {
    if (good === false) {
      return setGood(true);
    }
    setDisableBad(false);
    setDisableUgly(false);
    setGood(false);
  };

  const handleBad = () => {
    if (bad === false) {
      return setBad(true);
    }
    setDisableGood(false);
    setDisableUgly(false);
    setBad(false);
  };

  const handleUgly = () => {
    if (ugly === false) {
      return setUgly(true);
    }
    setDisableBad(false);
    setDisableGood(false);
    setUgly(false);
  };

  useEffect(() => {
    if (good && bad === true) {
      setDisableUgly(true);
    } else if (bad && ugly === true) {
      setDisableGood(true);
    } else if (ugly && good === true) {
      setDisableBad(true);
    }
  }, [good, bad, ugly]);

  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Header as="h1" style={{ margin: "0.5em 0em" }}>
              How To Do Things In Life
            </Header>
            <Form>
              <Form.Field>
                Choose Only <strong>TWO</strong>
              </Form.Field>
              <Form.Field inline>
                <Checkbox
                  toggle
                  label="The Good (or High Quality)"
                  onChange={handleGood}
                  disabled={disableGood ? true : null}
                />
              </Form.Field>
              <Form.Field inline>
                <Checkbox
                  toggle
                  label="The Bad (or Fast Speed)"
                  onChange={handleBad}
                  disabled={disableBad ? true : null}
                />
              </Form.Field>
              <Form.Field inline>
                <Checkbox
                  toggle
                  label="The Ugly (or Low Cost)"
                  onChange={handleUgly}
                  disabled={disableUgly ? true : null}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Divider />
            {good && bad ? (
              <p>
                This will cost you in may ways. You won't be able to do your
                best no matter how much you try. The third party will never be
                satisfied as they will either complain it took too long or cost
                too much or most likely, both. Expensive and not a good long
                term solution.
              </p>
            ) : null}
            {good && ugly ? (
              <p>
                This is by far the best option to do everything in life. Its
                inexpensive. One learns everything related to it for the rest of
                your life. It is a solid decision for long term happiness.
              </p>
            ) : null}
            {ugly && bad ? (
              <p>
                Don't bother. If anyone asks you to do it this way (cheap and
                fast), tell them to find someone else and run away from them as
                fast as you can. They are not for you. It will only end in
                tears.
              </p>
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Checkboxes;
